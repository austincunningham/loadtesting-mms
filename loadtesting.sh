#!/bin/bash
for (( c=1; c<=20; c++ ))
do  
   echo "Load testing running $c times"
   docker run -i loadimpact/k6 run -u 10 -d 120s -< mss-script.js --insecure-skip-tls-verify
done
