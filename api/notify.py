"""
FocusGrow - Desktop Notifications API (Vercel Serverless)
Note: Desktop notifications won't work in serverless environment
This endpoint will return a graceful response
"""

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/notify', methods=['POST'])
def send_notification():
    """
    Note: Desktop notifications (plyer) won't work in Vercel's serverless environment
    This endpoint returns a graceful response for compatibility
    """
    try:
        data = request.json
        title = data.get('title', 'FocusGrow')
        message = data.get('message', 'Timer completed!')
        
        # In serverless environment, we can't send desktop notifications
        # Return success for compatibility but note the limitation
        return jsonify({
            'success': True,
            'message': 'Notification received (desktop notifications not available in serverless)',
            'note': 'Use browser notifications instead for production deployment'
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """Check if API is running"""
    return jsonify({
        'status': 'ok', 
        'message': 'Notifications API is running (serverless mode)',
        'environment': 'vercel'
    })


# Vercel requires the app to be exported
def handler(request):
    """Vercel serverless function handler"""
    with app.app_context():
        return app.full_dispatch_request()
