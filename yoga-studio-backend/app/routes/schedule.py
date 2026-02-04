from flask import Blueprint, jsonify, request
from app import db
from app.models import Schedule, YogaClass

schedule_bp = Blueprint('schedule', __name__, url_prefix='/api/schedule')

@schedule_bp.route('/', methods=['GET'])
def get_schedules():
    """Retorna todos os horários"""
    schedules = Schedule.query.all()
    return jsonify([schedule.to_dict() for schedule in schedules]), 200

@schedule_bp.route('/by-day/<day>', methods=['GET'])
def get_schedules_by_day(day):
    """Retorna horários de um dia específico"""
    schedules = Schedule.query.filter_by(day_of_week=day).all()
    result = []
    
    for schedule in schedules:
        schedule_dict = schedule.to_dict()
        schedule_dict['class'] = schedule.yoga_class.to_dict()
        schedule_dict['instructor'] = schedule.yoga_class.instructor.to_dict() if schedule.yoga_class.instructor else None
        result.append(schedule_dict)
    
    return jsonify(result), 200

@schedule_bp.route('/', methods=['POST'])
def create_schedule():
    """Cria um novo horário"""
    data = request.json
    
    new_schedule = Schedule(
        class_id=data.get('class_id'),
        day_of_week=data.get('day_of_week'),
        start_time=data.get('start_time'),
        end_time=data.get('end_time')
    )
    
    db.session.add(new_schedule)
    db.session.commit()
    
    return jsonify(new_schedule.to_dict()), 201

@schedule_bp.route('/<int:id>', methods=['PUT'])
def update_schedule(id):
    """Atualiza um horário"""
    schedule = Schedule.query.get_or_404(id)
    data = request.json
    
    schedule.day_of_week = data.get('day_of_week', schedule.day_of_week)
    schedule.start_time = data.get('start_time', schedule.start_time)
    schedule.end_time = data.get('end_time', schedule.end_time)
    
    db.session.commit()
    
    return jsonify(schedule.to_dict()), 200

@schedule_bp.route('/<int:id>', methods=['DELETE'])
def delete_schedule(id):
    """Deleta um horário"""
    schedule = Schedule.query.get_or_404(id)
    db.session.delete(schedule)
    db.session.commit()
    
    return jsonify({'message': 'Horário deletado com sucesso'}), 200
