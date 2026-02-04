from flask import Blueprint, jsonify, request
from app import db
from app.models import Membership

memberships_bp = Blueprint('memberships', __name__, url_prefix='/api/memberships')

@memberships_bp.route('/', methods=['GET'])
def get_memberships():
    """Retorna todos os planos"""
    memberships = Membership.query.all()
    return jsonify([membership.to_dict() for membership in memberships]), 200

@memberships_bp.route('/<int:id>', methods=['GET'])
def get_membership(id):
    """Retorna um plano específico"""
    membership = Membership.query.get_or_404(id)
    return jsonify(membership.to_dict()), 200

@memberships_bp.route('/', methods=['POST'])
def create_membership():
    """Cria um novo plano"""
    data = request.json
    
    new_membership = Membership(
        name=data.get('name'),
        description=data.get('description'),
        price=data.get('price'),
        duration_days=data.get('duration_days'),
        unlimited_classes=data.get('unlimited_classes', False)
    )
    
    db.session.add(new_membership)
    db.session.commit()
    
    return jsonify(new_membership.to_dict()), 201

@memberships_bp.route('/<int:id>', methods=['PUT'])
def update_membership(id):
    """Atualiza um plano"""
    membership = Membership.query.get_or_404(id)
    data = request.json
    
    membership.name = data.get('name', membership.name)
    membership.description = data.get('description', membership.description)
    membership.price = data.get('price', membership.price)
    membership.duration_days = data.get('duration_days', membership.duration_days)
    membership.unlimited_classes = data.get('unlimited_classes', membership.unlimited_classes)
    
    db.session.commit()
    
    return jsonify(membership.to_dict()), 200

@memberships_bp.route('/<int:id>', methods=['DELETE'])
def delete_membership(id):
    """Deleta um plano"""
    membership = Membership.query.get_or_404(id)
    db.session.delete(membership)
    db.session.commit()
    
    return jsonify({'message': 'Plano deletado com sucesso'}), 200
