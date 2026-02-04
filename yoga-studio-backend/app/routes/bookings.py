from flask import Blueprint, jsonify, request
from app import db
from app.models import Booking, User

bookings_bp = Blueprint('bookings', __name__, url_prefix='/api/bookings')

@bookings_bp.route('/', methods=['GET'])
def get_bookings():
    """Retorna todas as reservas"""
    bookings = Booking.query.all()
    return jsonify([booking.to_dict() for booking in bookings]), 200

@bookings_bp.route('/user/<int:user_id>', methods=['GET'])
def get_user_bookings(user_id):
    """Retorna as reservas de um usuário"""
    bookings = Booking.query.filter_by(user_id=user_id).all()
    return jsonify([booking.to_dict() for booking in bookings]), 200

@bookings_bp.route('/', methods=['POST'])
def create_booking():
    """Cria uma nova reserva"""
    data = request.json
    
    new_booking = Booking(
        user_id=data.get('user_id'),
        class_id=data.get('class_id'),
        schedule_id=data.get('schedule_id'),
        booking_date=data.get('booking_date')
    )
    
    db.session.add(new_booking)
    db.session.commit()
    
    return jsonify(new_booking.to_dict()), 201

@bookings_bp.route('/<int:id>', methods=['PUT'])
def update_booking(id):
    """Atualiza uma reserva"""
    booking = Booking.query.get_or_404(id)
    data = request.json
    
    booking.status = data.get('status', booking.status)
    
    db.session.commit()
    
    return jsonify(booking.to_dict()), 200

@bookings_bp.route('/<int:id>', methods=['DELETE'])
def delete_booking(id):
    """Deleta uma reserva"""
    booking = Booking.query.get_or_404(id)
    db.session.delete(booking)
    db.session.commit()
    
    return jsonify({'message': 'Reserva cancelada com sucesso'}), 200
