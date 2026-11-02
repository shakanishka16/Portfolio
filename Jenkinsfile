pipeline {
    agent any
    
    // 👇 ADD THIS TRIGGERS BLOCK HERE 👇
    triggers {
        githubPush()
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/shakanishka16/Portfolio/tree/main'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t kanishka1603/portfolio:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-credentials-id', variable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u "kanishka1603" --password-stdin'
                    sh 'docker push kanishka1603/portfolio:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'minikube image load kanishka1603/portfolio:latest'
                sh 'minikube kubectl -- apply -f k8s/'
                sh 'minikube kubectl -- rollout restart deployment my-app-deployment'
            }
        }
    }
}
