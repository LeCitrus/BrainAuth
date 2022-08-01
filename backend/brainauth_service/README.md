## brainauth service

The backend server is built with flask. To start the server, run the following commands (for Windows):

1. ```cd server ```
2. ```py -m venv venv```
3. ```source venv/scripts/activate```
4.
```
   export FLASK_APP=brainauth_api/app.py
   export FLASK_ENV=development
```
5. ```flask run```
6. The api should be running on http://127.0.0.1:5000/
