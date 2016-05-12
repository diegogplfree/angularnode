var app = angular.module('main',[]).controller('mainController',function($scope,$http){

	$scope.env='DANGER'; 
	$scope.envClass='danger'; 
	$scope.mp=''; 
	$scope.accion='';
	$scope.pais='none';
	$scope.sicaccion='';
	
	$scope.ngClass = 'info hidden';
	$scope.message = 'Procesando, por favor espere....';	
	$scope.baseurl = '/';        

	$scope.set = function(p_mp,p_accion,p_texto,p_pais){
		$scope.mp=p_mp; 
		$scope.accion=p_accion; 
		$scope.textAccion=p_texto;
		$scope.pais = p_pais;
	};

	$scope.ajaxpost = function(p_url){
		$scope.ngClass = 'info';
		$scope.message = 'Procesando, por favor espere....';

		$http({
		    method: 'POST',
		    url: p_url + '&mp='+$scope.mp+'&accion='+$scope.accion+'&env='+$scope.env+'&pais='+$scope.pais
	  	}).success(function(response, status) {
	  		$scope.ngClass = 'success';
			$scope.message = 'Procesado con éxito';
        	
            $scope.ngClass = response.ngClass;
            $scope.message = response.message;
		}).error(function(data, status) {
		    $scope.ngClass = 'danger';
            $scope.message = status;	        	
		});
	};
        
    $scope.crearsic = function(obj){          
            var ichu = obj.target.attributes.send.value;            
            $scope.ajaxsimplepost($scope.baseurl,ichu);             
    };
        
    $scope.ajaxsimplepost = function(p_url,data){
		$scope.ngClass = 'info';
		$scope.message = 'Procesando, por favor espere....';

		$http({
		    method: 'POST',
		    url: p_url+'&accion=jiracreate&issue='+data
	  	}).success(function(response, status) {
	  		$scope.ngClass = 'success';
			$scope.message = 'Procesado con éxito';
        	
                    $scope.ngClass = response.ngClass;
                    $scope.message = response.message;
		}).error(function(data, status) {
		    $scope.ngClass = 'danger';
                    $scope.message = status;	        	
		});
	};

	$scope.comprobartelefono = function(){		
		$scope.url = $scope.baseurl + '&telefono='+$scope.telefono;
		$scope.ajaxpost($scope.url);		
	};

	$scope.mostrar = function(){		
		$scope.url = $scope.baseurl + '&idCliente='+$scope.idCliente;
		$scope.ajaxpost($scope.url);		
	};
	
	$scope.userprofile = function(){
		$scope.url = $scope.baseurl + '&id_usuario_account='+$scope.telefono;
		$scope.ajaxpost($scope.url);
	};


	$scope.servicespost = function(){
		
        /*$http.post('http://localhost/services2.php', { 
        		telefono:$scope.telefono, 
        		mp: $scope.mp, 
        		accion: $scope.accion,
        		env:$scope.env
        	},
	        function(response) { 

	        	$scope.ngClass = 'success';
				$scope.message = 'Procesado con éxito';
	        	
                //$scope.ngClass = response.ngclass;
                //$scope.message = response.message;
	        },
	        function(failure) { 
	        	console.log(failure);
	        	$scope.ngClass = 'danger';
                $scope.message = failure;	        	
	        }
	    );*/
	};
});


