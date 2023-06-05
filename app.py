from flask import Flask, render_template, request, redirect, url_for, flash, Response, jsonify
import numpy as np 
import sklearn
from flask_cors import CORS

app = Flask(__name__)

import pickle 
regressor = pickle.load(open('model_lr.pkl', 'rb'))


#@app.route("/Main")
#def hello_world(request):
        #result = regressor.predict([1000, 100, 5, 4, 1])

        #return Response(int(result))

@app.route('/prediction')
def index():
    LT = request.args.get('LT')
    LB = request.args.get('LB')
    JKT = request.args.get('JKT')
    JKM = request.args.get('JKM')
    GRS = request.args.get('GRS')

    LT = float(LT)
    LB = float(LB)
    JKT = float(JKT)
    JKM = float(JKM)
    GRS = float(GRS)

    result = regressor.predict([[LT, LB, JKT, JKM, GRS]])

    res = {
    'result': result[0]
    }
    return jsonify(res)
    #return Response(result, mimetype='application/json')

