angular.module("app.Controllers").controller("CardController", function ($scope) {

    $scope.TasksToDo =
        [

            { name: 'Odrobić lekcje', id: '1', content: "Odrobić z matematyki i angielskiego" },
            { name: 'Nakarmić kota', id: '2', content: "Dać suche i mokre" },
            { name: 'Zrobić zakupy', id: '3', content: "Mleko, mąka, sól, szampon, soki, piwo" }

        ];

        $scope.TasksDone = [
            // { name: 'Podlać kwiaty', id: '1' },
            // { name: 'Wynieść śmieci', id: '2' },
            // { name: 'Poodkurzać', id: '3' }
        ]
    let idValue = 4;
    $scope.AddCard = function (name, content) {

        //let nameValue = document.querySelector('.Add-name').value;
       

        if (name) {
            $scope.TasksToDo.push({ name: name, id: idValue, content: content });

            idValue++;
        }


    }
    $scope.MoveToDone = function(taskName){

       let index = $scope.TasksToDo.findIndex(x => x.name === taskName);
       let tempSplice = $scope.TasksToDo.splice(index,1);
       
    
        $scope.TasksDone.push(tempSplice[0]); 
    }




});