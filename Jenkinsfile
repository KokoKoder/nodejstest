pipeline {
    agent any
    stages {
        stage('Setup'){
            steps {
                sh 'python3 --version'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }
    }
}