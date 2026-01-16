from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/notify', methods=['POST'])
def notify():
    """Handle notification requests"""
    try:
        data = request.json
        title = data.get('title', 'FocusGrow')
        message = data.get('message', 'Timer completed!')
        
        return jsonify({
            'success': True,
            'message': 'Notification received',
            'note': 'Desktop notifications not available in serverless - use browser notifications'
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'ok',
        'message': 'API is running'
    })

# Export for Vercel
handler = app
