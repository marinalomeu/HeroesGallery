<?php


cors();

$enpoint = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if(strpos($enpoint, '/heroes') !== 0){
    header('HTTP/1.1 404 Not Found');
    return;
}

if($method == 'GET'){

    if(preg_match("/heroes\/studios/",$enpoint)){
        return getStudios();
    }

    return listHeroes();
}

if($method == 'POST'){

    if(preg_match("/heroes\/excluirlote/",$enpoint)){
        return deletarLote();
    }

    return createHero();
}

if($method == 'DELETE'){
    preg_match("/heroes\/(\d+)/",$enpoint, $matches);
    return deleteHero($matches[1]);
}

if($method == 'PUT'){

    if(preg_match("/heroes\/(\d+)/",$enpoint, $matches)){
        return editHeroName();
    }
    editHeroStudio();
}


header('HTTP/1.1 404 Not Found');


function listHeroes(){
    echo file_get_contents(__DIR__.'/heroes.json');
}


function getStudios(){
    echo file_get_contents(__DIR__.'/studios.json');
}


function createHero(){
    $heroes = json_decode(file_get_contents(__DIR__.'/heroes.json'), true);

    $heroReq = json_decode(file_get_contents('php://input'),true);
    $hero = [
        'id' => end($heroes)['id'] + 1,
        'name' => $heroReq['name'],
        'gender' => $heroReq['gender'],
        'superpower' => $heroReq['superpower'],
        'studio' => $heroReq['studio'],
        'avatar' => $heroReq['avatar']
    ];
    
    $heroes[] = $hero;

    file_put_contents(__DIR__.'/heroes.json', json_encode($heroes));

    echo json_encode($hero);    
}


function deletarLote(){
    $heroes = json_decode(file_get_contents(__DIR__.'/heroes.json'), true);

    $json = json_decode(file_get_contents('php://input'),true);
    $idsToBeDeleted = $json['ids'];

    $newList = [];

    foreach($heroes as $hero) {

        if(!in_array($hero['id'], $idsToBeDeleted)){
            $newList[] = $hero;
        }
    }

    $heroes = $newList;

    file_put_contents(__DIR__.'/heroes.json', json_encode($heroes));

    listHeroes();
}


function deleteHero($heroId){
    $newList = [];
    $heroes = json_decode(file_get_contents(__DIR__.'/heroes.json'), true);

    foreach($heroes as $hero) {
        if($hero['id'] != $heroId){
            $newList[] = $hero;
        }
    }
    $heroes = $newList;

    file_put_contents(__DIR__.'/heroes.json', json_encode($heroes));
    echo json_encode($heroes); 
}


function editHeroName($heroId){
    $heroes = json_decode(file_get_contents(__DIR__ . '/heroes.json'), true);
    $heroReq = json_decode(file_get_contents('php://input'), true);

    foreach ($heroes as $key => $hero) {
        if ($hero['id'] == $heroId) {
            $heroes[$key]['name'] = $heroReq['name'];
            break;
        }
    }
    file_put_contents(__DIR__ . '/heroes.json', json_encode($heroes));
    echo json_encode($heroReq);
}


function editHeroStudio(){
    $heroes = json_decode(file_get_contents(__DIR__ . '/heroes.json'), true);

    $heroesToEdit = json_decode(file_get_contents('php://input'), true);
    
    
    $idsToEdit = $heroesToEdit['ids'];
   
    $studioName = getStudioName($heroesToEdit['studio']);

    foreach($heroes as $i=>$hero) {

        if(in_array($hero['id'], $idsToEdit)){

            $heroes[$i]['studio'] = $studioName;
        }
    }

    file_put_contents(__DIR__.'/heroes.json', json_encode($heroes));
    
}


function getStudioName($studioId){

    $studios = json_decode(file_get_contents(__DIR__ . '/studios.json'), true);


    foreach($studios as $studio){
        if($studio['id'] == $studioId){
            return $studio['name'];
        }
    }
}


function cors() {

    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');   
    }
  
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
}
