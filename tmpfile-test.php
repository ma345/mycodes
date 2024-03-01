<?php

$f = tmpfile();

if (false !== $f) {
    // write some text to the file
    fputs($f, 'The current time is ' . strftime('%c'));
}

echo 'The current time is ' . strftime('%c');
sleep(10);

exit(1);
