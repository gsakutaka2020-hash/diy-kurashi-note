$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
Set-Location "C:\Users\gsaku\Documents\diy-kurashi-note"
if (Test-Path "node_modules") { Remove-Item -Recurse -Force "node_modules" }
& "C:\Program Files\nodejs\npm.cmd" install
