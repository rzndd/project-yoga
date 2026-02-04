from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    
    # Configurações
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///yoga_studio.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = 'sua-chave-secreta-aqui'
    
    # Inicializa extensões
    db.init_app(app)
    CORS(app)
    
    # Registra blueprints
    from app.routes import classes_bp, schedule_bp, memberships_bp, instructors_bp, bookings_bp
    
    app.register_blueprint(classes_bp)
    app.register_blueprint(schedule_bp)
    app.register_blueprint(memberships_bp)
    app.register_blueprint(instructors_bp)
    app.register_blueprint(bookings_bp)
    
    # Cria tabelas
    with app.app_context():
        db.create_all()
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
