#!/bin/bash
# make sure you have execute permissions:
# cd /path/to/project
# chmod +x ./sendgrid_webhook.sh
# to run, type ./sendgrid_webhook.sh in the terminal

function localtunnel {
lt -s hslfdhasdlf --port 3000
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

//  lt -s http://hslfdhasdlf.localtunnel.me --port 3000
