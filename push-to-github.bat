@echo off
cd /d "%~dp0"
git init
git add .
git commit -m "Initial commit: VetRad IT Knowledge Base demo app"
git remote add origin https://github.com/russhaskett/vetrad-kb.git
git branch -M main
git push -u origin main
echo.
echo Done. Press any key to close.
pause
