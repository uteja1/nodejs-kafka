# nodejs-kafka-example

> - Apache Kafka Crash Course - https://www.youtube.com/watch?v=R873BlNVUB4

> - Install Docker.

> - run the below command to setUp kafka and zookeeper with help of docker compose file.

        ```
            $  docker-compose up
        ```

> - Initialize topic - run the below command to initialize the topics to be defined in kafka broker.

        ```
            $   node topic.js
        ```

> - Producer to send messages - Produce / Publish message to defined topic in kafka broker.

        run the below command to send message to the kafka broker partition based on the specified condition. 

        ``` 
            $ node producer.js test123

            "test123" is the messege sent to kafka broker.

        ```

> - Consumer to consume the messages - This method will be running indefinitely, consuming new messages coming to Topic defined in kafka broker.
    
        run the below command to consume the messages from kafka broker partition.

        ```

            $ node consumer.js

        ``` 






