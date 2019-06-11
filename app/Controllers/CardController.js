angular.module("app.Controllers").controller("CardController", function ($scope) {

    $scope.Tasks =
        [

            { name: 'Odrobić lekcje', id: '1' },
            { name: 'Nakarmić kota', id: '2' },
            { name: 'Zrobić zakupy', id: '3' }

        ];
        let idValue = 4;
    $scope.AddCard = function () {
       
        let nameValue = document.querySelector('.Add-name').value;

        if (nameValue){
            $scope.Tasks.push({ name: nameValue, id: idValue});
        
            idValue++;
            alert($scope.Tasks.length);
        }
        
        
    }
  



});