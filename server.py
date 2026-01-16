"""
FocusGrow - Simple HTTP Server
Run this script to serve the application locally
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

# Configuration
PORT = 8080
HOST = "localhost"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Custom logging with colors
        print(f"[{self.log_date_time_string()}] {format % args}")

def main():
    # Change to the script's directory
    os.chdir(Path(__file__).parent)
    
    # Create server
    handler = MyHTTPRequestHandler
    
    with socketserver.TCPServer((HOST, PORT), handler) as httpd:
        url = f"http://{HOST}:{PORT}/index.html"
        
        print("=" * 60)
        print("🌱 FocusGrow Study Timer - Server Starting")
        print("=" * 60)
        print(f"📍 Server running at: {url}")
        print(f"🌐 Local access: http://localhost:{PORT}")
        print(f"📂 Serving directory: {os.getcwd()}")
        print("-" * 60)
        print("💡 Press Ctrl+C to stop the server")
        print("=" * 60)
        print()
        
        # Open browser automatically
        try:
            webbrowser.open(url)
            print("✅ Browser opened automatically")
        except Exception as e:
            print(f"⚠️  Could not open browser: {e}")
            print(f"   Please open {url} manually")
        
        print()
        print("📊 Server logs:")
        print("-" * 60)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n" + "=" * 60)
            print("🛑 Server stopped by user")
            print("=" * 60)
            httpd.shutdown()

if __name__ == "__main__":
    main()
