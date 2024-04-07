pipeline {
    agent any
    stages {
        stage('Setup'){
            steps {
                sh 'python3 --version'
            }
        }
        stage('Dependencies'){
            steps {
                sh 'pip install selenium'
                sh 'pip install git+https://github.com/behave/behave'
                
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
            }
        }
    }
}