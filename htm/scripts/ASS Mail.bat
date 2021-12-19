echo off
cd\
C:
cd TESTE1
xcopy *%USERNAME%.htm* C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Signatures /y /h
