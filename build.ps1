$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
Set-Location "C:\Users\gsaku\Documents\diy-kurashi-note"
& "C:\Program Files\nodejs\npm.cmd" run build 2>&1
