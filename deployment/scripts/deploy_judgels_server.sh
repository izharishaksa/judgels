#!/bin/bash

set -ex

cd deployment/ansible

ansible --version
ansible-playbook -e @env/vars.yml -e app_version=test-pending playbooks/deploy-judgels-server.yml
