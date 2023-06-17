## yabloco

Загрузка зависимостей:
`npm install`

Запуск PostgreSQL без установки:
- Для начала необходимы бинарные файлы сервера для Windows. Можете скопировать папку PostgreSQL (минус папка data) из существующей установки сервера, или просто скачать файлы из раздела сайта [PostgreSQL Windows](https://www.enterprisedb.com/download-postgresql-binaries). Убедитесь в том, что выбран .zip архив.
- Далее скопируйте приведенный ниже пакетный файл в корень новой папки PostgreSQL.
- Запустите пакетный файл.

Ниже приведен скрипт, который запускает сервер PostgreSQL, ждет нажатия любой клавиши и завершает работу службы. Мы выбрали для запуска нестандартный порт (5439, чтобы мы знали, что это сервер 9.0). Чтобы инициализировать базу данных в первый раз, вам нужно запустить строку initdb. Ее нужно запустить только один раз.
```cmd
@ECHO ON REM The script sets environment variables helpful for PostgreSQL
@SET PATH="%~dp0\bin";%PATH%
@SET PGDATA=%~dp0\data
@SET PGDATABASE=postgres
@SET PGUSER=postgres
@SET PGPORT=5439
@SET PGLOCALEDIR=%~dp0\share\locale
REM "%~dp0\bin\initdb" -U postgres -A trust
"%~dp0\bin\pg_ctl" -D "%~dp0/data" -l logfile start
ECHO "Click enter to stop"
pause
"%~dp0\bin\pg_ctl" -D "%~dp0/data" stop
```