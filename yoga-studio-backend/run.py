import os
from app import create_app, db
from app.models import YogaClass, Instructor, Schedule, Membership, User, Booking

app = create_app()

@app.shell_context_processor
def make_shell_context():
    return {
        'db': db,
        'YogaClass': YogaClass,
        'Instructor': Instructor,
        'Schedule': Schedule,
        'Membership': Membership,
        'User': User,
        'Booking': Booking
    }

if __name__ == '__main__':
    app.run(debug=True, port=5000)
