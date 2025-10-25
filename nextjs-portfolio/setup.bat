@echo off
echo ========================================
echo Kavan Patel Portfolio - Setup Script
echo ========================================
echo.

echo [1/4] Installing dependencies...
call npm install

echo.
echo [2/4] Creating public directory...
if not exist "public" mkdir public

echo.
echo [3/4] Copying images...
if exist "..\images" (
    xcopy /E /I /Y "..\images" "public\images"
    echo Images copied successfully!
) else (
    echo Warning: Images folder not found at ..\images
    echo Please manually copy your images to public\images\
)

echo.
echo [4/4] Setup complete!
echo.
echo ========================================
echo Next steps:
echo 1. Copy your images to public\images\ if not done
echo 2. Run: npm run dev
echo 3. Open http://localhost:3000 in your browser
echo ========================================
echo.
pause
