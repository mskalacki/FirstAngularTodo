angular.module("app.Controllers").controller("CardController", function ($scope) {

    $scope.TasksToDo =
        [

            { name: 'Odrobić lekcje', id: '1' },
            { name: 'Nakarmić kota', id: '2' },
            { name: 'Zrobić zakupy', id: '3' }

        ];

        $scope.TasksDone = [
            { name: 'Podlać kwiaty', id: '1' },
            { name: 'Wynieść śmieci', id: '2' },
            { name: 'Poodkurzać', id: '3' }


        ]
    let idValue = 4;
    $scope.AddCard = function () {

        let nameValue = document.querySelector('.Add-name').value;

        if (nameValue) {
            $scope.TasksToDo.push({ name: nameValue, id: idValue });

            idValue++;

        }


    }
    $scope.MoveToDone = function(taskName){

       let index = $scope.TasksToDo.findIndex(x => x.name === taskName);
       let tempSplice = $scope.TasksToDo.splice(index,1);
       
        // $scope.TasksDone.unshift($scope.TasksToDo[index]);
        // $scope.TasksTodo.splice(0,1);
        $scope.TasksDone.unshift(tempSplice[0]);

      

       
    }




});