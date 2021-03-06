const http= require("http")
const express = require("express")
const server = express()

server.use(express.static("public"))

server.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html")
    
})
server.get("/index",function(req,res){
    res.sendFile(__dirname + "/home-automation-simulation_3.0/index.html")
    
})
server.get("/Sumario",function(req,res){
    res.sendFile(__dirname + "/src/Sumario.html")
    
})
server.get("/conceito_domotica",function(req,res){
    res.sendFile(__dirname + "/src/conceito_domotica.html")
    
})
server.get("/tela05",function(req,res){
    res.sendFile(__dirname + "/src/tela05.html")
    
})
server.get("/tipos_atuador",function(req,res){
    res.sendFile(__dirname + "/src/tipos_atuador.html")
    
})
server.get("/tela06",function(req,res){
    res.sendFile(__dirname + "/src/tela06.html")
    
})
server.get("/tela07",function(req,res){
    res.sendFile(__dirname + "/src/tela07.html")
    
})
server.get("/tela08",function(req,res){
    res.sendFile(__dirname + "/src/tela08.html")
    
})
server.get("/tela09",function(req,res){
    res.sendFile(__dirname + "/src/tela09.html")
    
})

server.get("/sensor_proximidade",function(req,res){
    res.sendFile(__dirname + "/src/sensor_proximidade.html")
    
})
server.get("/atuadores_tipos",function(req,res){
    res.sendFile(__dirname + "/src/atuadores_tipos.html")
    
})
server.get("/Conceito_atuador",function(req,res){
    res.sendFile(__dirname + "/src/Conceito_atuador.html")
    
})
server.get("/Tipos_de_sensores",function(req,res){
    res.sendFile(__dirname + "/src/Tipos_de_sensores.html")
    
})
server.get("/Sensor_de_Luminosidade",function(req,res){
    res.sendFile(__dirname + "/src/Sensor_de_Luminosidade.html")
    
})
server.get("/Sensor_de_Temperatura",function(req,res){
    res.sendFile(__dirname + "/src/Sensor_de_Temperatura.html")
    
})

server.get("/tipos_hw_control",function(req,res){
    res.sendFile(__dirname + "/src/tipos_hw_control.html")
    
})
server.get("/hardware_controle",function(req,res){
    res.sendFile(__dirname + "/src/hardware_controle.html")
    
})
server.get("/tela10",function(req,res){
    res.sendFile(__dirname + "/src/tela10.html")
    
})
server.get("/quem_somos",function(req,res){
    res.sendFile(__dirname + "/Quem_somos/quem_somos.html")
    
})

const PORT = process.env.PORT|| 4000;
server.listen(PORT,() =>{
    console.log("listening on port" + PORT);
})

