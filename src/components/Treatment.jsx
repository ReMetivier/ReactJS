import React from 'react';
import {Fragment} from 'react';
import exam from '../qcm';

function Treatment(){
    //déclaration des variables
    let baliseName; // valeur du name de answer
    let baliseType; // valeur du type de answer
    let increment= 0; // variable à incrémenter pour avoir une variable unique
    let output = []; 

    //fonction si le type est Text
    function Text(){
        output[increment] = <Fragment>
            <label className="questions">{exam[i].question}</label>
            <input type="text" name={baliseName}  /><br />
        </Fragment>
    }

    //fonction si le type est Radio
    function Radio(){
        increment++;
        output[increment] = <Fragment><br />
            <label className="questions">{j==0 ? exam[i].question:""}</label><br />
            <label> {exam[i].answer.options[j].text}</label>
            <input type="radio" 
            name={exam[i].answer.name} 
            value={exam[i].answer.options[j].value}
            />
        </Fragment>
    }

    //fonction si le type est Checkbox
    function Checkbox(){
        increment++;
        output[increment] = <Fragment><br />
            
            <label className="questions">{j==0 ? exam[i].question:""}</label><br />
            
            <label>{exam[i].answer.options[j].text}</label>
            <input type="checkbox" name={exam[i].answer.name} value={exam[i].answer.options[j].name} />
        </Fragment>
    }

    //fonction si le type est Toggle
    function Toggle(){
        increment++
        output[increment]= <Fragment>
            <label className="questions">{j==0 ? exam[i].question:""}</label><br />
            <label>{exam[i].answer.type}</label>
        </Fragment>
    }

    //je fais une boucle sur la totalité de exam
    for (var i = 0; i < exam.length; i++){
        increment++;
        baliseName = exam[i].answer.name;
        baliseType = exam[i].answer.type;

        //je fais une demande conditionnelle pour vérifier le type 
        if(baliseType === 'text'){
            Text();

        //je fais une demande conditionnelle pour vérifier le type 
        }else if(exam[i].answer.options){

            //je boucle sur la totalité des questions
            for(var j in exam[i].answer.options){

                //je vérifie les différents type
                if(exam[i].answer.type ==="radio"){
                   Radio()
                }

                //je vérifie les différents type
                else if(exam[i].answer.type ==="checkbox"){
                    Checkbox()

                //je vérifie les différents type
                }else if(exam[i].answer.type ==="toggle"){
                    Toggle()
                }
            }
        }
    }
    output[increment] = <Fragment>
        <br />
        <button type="submit">Validation</button>
    </Fragment> 
    return output
}

export default Treatment