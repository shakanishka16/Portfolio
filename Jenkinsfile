pipeline {
    agent any
    
    triggers {
        githubPush()
    }
    
    stages {
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
