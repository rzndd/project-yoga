from flask import Blueprint, jsonify, request
from app import db
from app.models import YogaClass, Instructor

classes_bp = Blueprint('classes', __name__, url_prefix='/api/classes')

@classes_bp.route('/', methods=['GET'])
def get_classes():
    """Retorna todas as aulas"""
    classes = YogaClass.query.all()
    return jsonify([cls.to_dict() for cls in classes]), 200

@classes_bp.route('/<int:id>', methods=['GET'])
def get_class(id):
    """Retorna uma aula específica"""
    yoga_class = YogaClass.query.get_or_404(id)
    return jsonify(yoga_class.to_dict()), 200

@classes_bp.route('/', methods=['POST'])
def create_class():
    """Cria uma nova aula"""
    data = request.json
    
    new_class = YogaClass(
        name=data.get('name'),
        description=data.get('description'),
        level=data.get('level'),
        duration=data.get('duration'),
        max_participants=data.get('max_participants', 20),
        instructor_id=data.get('instructor_id')
    )
    
    db.session.add(new_class)
    db.session.commit()
    
    return jsonify(new_class.to_dict()), 201

@classes_bp.route('/<int:id>', methods=['PUT'])
def update_class(id):
    """Atualiza uma aula"""
    yoga_class = YogaClass.query.get_or_404(id)
    data = request.json
    
    yoga_class.name = data.get('name', yoga_class.name)
    yoga_class.description = data.get('description', yoga_class.description)
    yoga_class.level = data.get('level', yoga_class.level)
    yoga_class.duration = data.get('duration', yoga_class.duration)
    yoga_class.max_participants = data.get('max_participants', yoga_class.max_participants)
    
    db.session.commit()
    
    return jsonify(yoga_class.to_dict()), 200

@classes_bp.route('/<int:id>', methods=['DELETE'])
def delete_class(id):
    """Deleta uma aula"""
    yoga_class = YogaClass.query.get_or_404(id)
    db.session.delete(yoga_class)
    db.session.commit()
    
    return jsonify({'message': 'Aula deletada com sucesso'}), 200
