<?php

// https://blog.frankdejonge.nl/array-destructuring-in-php/
// http://php.net/manual/en/migration71.new-features.php

$arr = [5, 6, 7, 8, 9];

//list($a1,$a2) = $arr;
[$a1, $a2] = $arr;

var_dump($a1);
var_dump($a2);


//[ $a1, $a2 ] = [ $a2, $a1 ];



// http://php.net/manual/en/functions.arguments.php#functions.variable-arg-list
// http://php.net/manual/en/migration56.new-features.php

function test($name, $address, ...$rest) {
    var_dump($rest);
}

test('Inchoo', 'Trg Slobode 6', 'Osijek', 'Croatia');
