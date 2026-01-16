"""
FocusGrow - Desktop Notifications API
Simple Flask API to send Windows notifications when timer completes
Run with: python notifications_api.py
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from plyer import notification
import time

app = Flask(__name__)
CORS(app)

@app.route('/api/notify', methods=['POST'])
def send_notification():
    """Send a desktop notification"""
    try:
        data = request.json
        title = data.get('title', 'FocusGrow')
        message = data.get('message', 'Timer completed!')
        
        notification.notify(
            title=title,
            message=message,
            app_name='FocusGrow',
            timeout=10  # Notification stays for 10 seconds
        )
        
        return jsonify({
            'success': True,
            'message': 'Notification sent!'
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """Check if API is running"""
    return jsonify({'status': 'ok', 'message': 'Notifications API is running'})


if __name__ == '__main__':
    print("=" * 60)
    print("🔔 FocusGrow Notifications API")
    print("=" * 60)
    print()
    print("✅ Server running at: http://localhost:5000")
    print("📢 Ready to send desktop notifications!")
    print()
    print("Press Ctrl+C to stop")
    print("=" * 60)
    print()
    
    app.run(debug=True, port=5000)
