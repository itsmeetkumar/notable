
const express = require('express');
const app = express();

var physicians =[
{id: 1, name:"Meetkumar Patel"},
{id: 2, name: "Adnan Vohra"},
{id: 3, name: "Emma watson"},
{id: 4, name: "Sunny walt"}
];

var appointments = [
{id: 1, phid:1, name:"aric baker", timea:"8:00 AM", comment:"New application"},
{id: 2, phid:1, name:"bob kevin", timea:"9:00 AM", comment:"New application"},
{id: 3, phid:2, name:"peter Rodrigus", timea:"11:00 AM", comment:"New application"},
{id: 4, phid:2, name:"Ray watson", timea:"7:00 AM", comment:"New application"},
{id: 5, phid:3, name:"Susan Kane", timea:"10:00 AM", comment:"New application"},

];

app.get('/api/getAll',(req,res)=>{
    res.json(physicians);
})

app.get('/api/getAppointments/:id', (req,res)=>{
    const output =[];
    //res.send(output);
    for(var i=0; i<appointments.length; i++){
        var tappointments = appointments[i];
        if(tappointments.phid == req.params.id)
        {
            output.push({ id : tappointments.id,
                name :tappointments.name,
                time :tappointments.timea,
                kind :tappointments.comment
               });
        }
    }

    res.json(output);
});

app.listen(3003, ()=> console.log('Listening on 3003'))

// app.post()
// app.put()
// app.delete()
