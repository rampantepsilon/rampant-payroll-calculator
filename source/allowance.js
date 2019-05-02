app.allowance = function($scope){
  $scope.allowance = function(){
    var allowances = 0;
    if ($scope.pPeriod == 'weekly'){
      allowances = 80.80 * $scope.dependents;
    }
    if ($scope.pPeriod == 'biweekly'){
      allowances = 161.50 * $scope.dependents;
    }
    if ($scope.pPeriod == 'semimonthly'){
      allowances = 175 * $scope.dependents;
    }
    if ($scope.pPeriod == 'monthly'){
      allowances = 350 * $scope.dependents;
    }
    if ($scope.pPeriod == 'quarterly'){
      allowances = 1050 * $scope.dependents;
    }
    if ($scope.pPeriod == 'semiannually'){
      allowances = 2100 * $scope.dependents;
    }
    if ($scope.pPeriod == 'annually'){
      allowances = 4200 * $scope.dependents;
    }
    if ($scope.pPeriod == 'daily'){
      allowances = 16.20 * $scope.dependents;
    }
    return allowances;
  }
}
