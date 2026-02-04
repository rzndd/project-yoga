from app import db
from datetime import datetime

class YogaClass(db.Model):
    __tablename__ = 'yoga_classes'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    level = db.Column(db.String(50), nullable=False)  # Iniciante, Intermediário, Avançado
    duration = db.Column(db.Integer)  # em minutos
    max_participants = db.Column(db.Integer, default=20)
    instructor_id = db.Column(db.Integer, db.ForeignKey('instructors.id'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    schedules = db.relationship('Schedule', backref='yoga_class', lazy=True, cascade='all, delete-orphan')
    bookings = db.relationship('Booking', backref='yoga_class', lazy=True, cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'level': self.level,
            'duration': self.duration,
            'max_participants': self.max_participants,
            'instructor_id': self.instructor_id
        }


class Instructor(db.Model):
    __tablename__ = 'instructors'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    bio = db.Column(db.Text)
    specialties = db.Column(db.String(255))  # Separado por vírgula
    phone = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    classes = db.relationship('YogaClass', backref='instructor', lazy=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'bio': self.bio,
            'specialties': self.specialties.split(',') if self.specialties else [],
            'phone': self.phone
        }


class Schedule(db.Model):
    __tablename__ = 'schedules'
    
    id = db.Column(db.Integer, primary_key=True)
    class_id = db.Column(db.Integer, db.ForeignKey('yoga_classes.id'), nullable=False)
    day_of_week = db.Column(db.String(20), nullable=False)  # Segunda, Terça, etc
    start_time = db.Column(db.String(5), nullable=False)  # HH:MM
    end_time = db.Column(db.String(5), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'class_id': self.class_id,
            'day_of_week': self.day_of_week,
            'start_time': self.start_time,
            'end_time': self.end_time
        }


class Membership(db.Model):
    __tablename__ = 'memberships'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)
    duration_days = db.Column(db.Integer)  # Duração em dias (30 para mensal, 365 para anual)
    unlimited_classes = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'duration_days': self.duration_days,
            'unlimited_classes': self.unlimited_classes
        }


class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20))
    password_hash = db.Column(db.String(255))
    membership_id = db.Column(db.Integer, db.ForeignKey('memberships.id'))
    membership_start_date = db.Column(db.DateTime)
    membership_end_date = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    bookings = db.relationship('Booking', backref='user', lazy=True, cascade='all, delete-orphan')
    membership = db.relationship('Membership', backref='users')
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'membership_id': self.membership_id,
            'membership_start_date': self.membership_start_date,
            'membership_end_date': self.membership_end_date
        }


class Booking(db.Model):
    __tablename__ = 'bookings'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    class_id = db.Column(db.Integer, db.ForeignKey('yoga_classes.id'), nullable=False)
    schedule_id = db.Column(db.Integer, db.ForeignKey('schedules.id'), nullable=False)
    booking_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(50), default='confirmed')  # confirmed, cancelled
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    schedule = db.relationship('Schedule', backref='bookings')
    
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'class_id': self.class_id,
            'schedule_id': self.schedule_id,
            'booking_date': self.booking_date,
            'status': self.status
        }
