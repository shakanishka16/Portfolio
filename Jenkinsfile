pipeline {
    agent any
    
    triggers {
        githubPush()
    }
    
    environment {
        CONTAINER_NAME = 'portfolio-app'
        DOCKER_IMAGE = 'kanishka1603/portfolio:latest'
    }
    
    stages {
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-credentials-id', variable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u "kanishka1603" --password-stdin'
                    sh "docker push ${DOCKER_IMAGE}"
                }
            }
        }
        stage('Deploy to EC2') {
            steps {
                script {
                    echo 'Stopping old container if running...'
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"

                    echo 'Running new container on port 3000...'
                    sh "docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${DOCKER_IMAGE}"
                }
            }
        }
    }
}
