pipeline {
    agent any
    stages {
        stage('Setup'){
            steps {
                sh 'python3 --version'
                sh 'python3 -m venv ./venv'
                sh 'source venv/bin/activate'
            }
        }
        stage('Dependencies'){
            steps {
                sh 'pip3 install selenium'
                sh 'pip3 install git+https://github.com/behave/behave'
                sh 'source venv/bin/activate'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'behave'
                sh './jenkins/scripts/test.sh' 
                sh 'source deactivate'
            }
        }
    }
}