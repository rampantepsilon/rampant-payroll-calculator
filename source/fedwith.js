app.fedWithholding = function($scope){
  $scope.fedTax = function() {
    var fedTax;
    var newGross = $scope.grossPay();

    //Calculate Dependent Allowance
    if ($scope.pPeriod == 'weekly'){
      newGross = ($scope.grossPay() - $scope.allowance());
    }
    if ($scope.pPeriod == 'biweekly'){
      newGross = ($scope.grossPay() - $scope.allowance());
    }
    if ($scope.pPeriod == 'semimonthly'){
      newGross = ($scope.grossPay() - $scope.allowance());
    }
    if ($scope.pPeriod == 'monthly'){
      newGross = ($scope.grossPay() - $scope.allowance());
    }
    if ($scope.pPeriod == 'quarterly'){
      newGross = ($scope.grossPay() - $scope.allowance());
    }
    if ($scope.pPeriod == 'semiannually'){
      newGross = ($scope.grossPay() - $scope.allowance());
    }
    if ($scope.pPeriod == 'annually'){
      newGross = ($scope.grossPay() - $scope.allowance());
    }
    if ($scope.pPeriod == 'daily'){
      newGross = ($scope.grossPay() - $scope.allowance());
    }

    //Calculate Withholding
    if ($scope.mStatus == 'single'){
      if ($scope.pPeriod == 'weekly'){
        if (newGross < 73){
          fedTax = 0;
        }
        if (newGross > 73 && newGross < 260.01){
          fedTax = (newGross - 73) * 0.10;
        }
        if (newGross > 260 && newGross < 832.01){
          fedTax = ((newGross - 260) * 0.12) + 18.70;
        }
        if (newGross > 832 && newGross < 1692.01){
          fedTax = ((newGross - 832) * 0.22) + 87.34;
        }
        if (newGross > 1692 && newGross < 3164.01){
          fedTax = ((newGross - 1692) * 0.24) + 276.54;
        }
        if (newGross > 3164 && newGross < 3998.01){
          fedTax = ((newGross - 3164) * 0.32) + 629.82;
        }
        if (newGross > 3998 && newGross < 9887.01){
          fedTax = ((newGross - 3998) * 0.35) + 896.70;
        }
        if (newGross > 9887){
          fedTax = ((newGross - 9887) * 0.37) + 2957.85;
        }
      }
      if ($scope.pPeriod == 'biweekly') {
        if (newGross < 146){
          fedTax = 0;
        }
        if (newGross > 146 && newGross < 519.01){
          fedTax = (newGross - 146) * 0.10;
        }
        if (newGross > 519 && newGross < 1664.01){
          fedTax = ((newGross - 519) * 0.12) + 37.30;
        }
        if (newGross > 1664 && newGross < 3385.01){
          fedTax = ((newGross - 1664) * 0.22) + 174.70;
        }
        if (newGross > 3385 && newGross < 6328.01){
          fedTax = ((newGross - 3385) * 0.24) + 553.32;
        }
        if (newGross > 6328 && newGross < 7996.01){
          fedTax = ((newGross - 6328) * 0.32) + 1259.64;
        }
        if (newGross > 7996 && newGross < 19773.01){
          fedTax = ((newGross - 7996) * 0.35) + 1793.40;
        }
        if (newGross > 19773){
          fedTax = ((newGross - 19773) * 0.37) + 5915.35;
        }
      }
    }
    if ($scope.mStatus == 'married'){

    }

    fedTax = Math.round(fedTax * 100)/100;
    return fedTax;
  }
}
