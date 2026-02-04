from flask import Blueprint, jsonify, request
from app import db
from app.models import Instructor

instructors_bp = Blueprint('instructors', __name__, url_prefix='/api/instructors')

@instructors_bp.route('/', methods=['GET'])
def get_instructors():
    """Retorna todos os instrutores"""
    instructors = Instructor.query.all()
    return jsonify([instructor.to_dict() for instructor in instructors]), 200

@instructors_bp.route('/<int:id>', methods=['GET'])
def get_instructor(id):
    """Retorna um instrutor específico"""
    instructor = Instructor.query.get_or_404(id)
    return jsonify(instructor.to_dict()), 200

@instructors_bp.route('/', methods=['POST'])
def create_instructor():
    """Cria um novo instrutor"""
    data = request.json
    
    new_instructor = Instructor(
        name=data.get('name'),
        email=data.get('email'),
        bio=data.get('bio'),
        specialties=data.get('specialties'),
        phone=data.get('phone')
    )
    
    db.session.add(new_instructor)
    db.session.commit()
    
    return jsonify(new_instructor.to_dict()), 201

@instructors_bp.route('/<int:id>', methods=['PUT'])
def update_instructor(id):
    """Atualiza um instrutor"""
    instructor = Instructor.query.get_or_404(id)
    data = request.json
    
    instructor.name = data.get('name', instructor.name)
    instructor.bio = data.get('bio', instructor.bio)
    instructor.specialties = data.get('specialties', instructor.specialties)
    instructor.phone = data.get('phone', instructor.phone)
    
    db.session.commit()
    
    return jsonify(instructor.to_dict()), 200

@instructors_bp.route('/<int:id>', methods=['DELETE'])
def delete_instructor(id):
    """Deleta um instrutor"""
    instructor = Instructor.query.get_or_404(id)
    db.session.delete(instructor)
    db.session.commit()
    
    return jsonify({'message': 'Instrutor deletado com sucesso'}), 200
