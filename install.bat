@echo off
echo Installing FocusGrow dependencies...
echo.
pip install flask flask-cors plyer
echo.
echo Installation complete!
echo.
echo To run the notification server:
echo python notifications_api.py
echo.
pause
