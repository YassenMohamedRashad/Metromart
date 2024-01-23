# OpenWindowsTerminal.ps1

# Open both directories in tabs within the same Windows Terminal window
wt -d "F:\books and assignments\IT\3rd year\MetroMart\Metromart-main-branch" -p "Windows PowerShell" --title "React App"; 
wt -w 0 nt -d "F:\books and assignments\IT\3rd year\NodeServer" -p "Windows PowerShell" --title "NodeServer"
