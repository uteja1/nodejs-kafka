const {Kafka} = require('kafkajs');

run ();

async function run() {
    
    try {
        
        const kafka = new Kafka({
            'clientId' : 'app',
            'brokers' : ['localhost:29092']
        });

        // consumer group ID.
        const consumer = kafka.consumer({
            'groupId' : 'test'
        });
        await consumer.connect();
        console.log('connected');
       /*
            consume messeges from topic 'users'
       */
        consumer.subscribe({
            'fromBeginning' : true,
            'topic' : 'users'
        });

        /*
            Performing operations on the messege got from the topic.
            Here, I am printing the messege.
            This task will be scanning each 
        */
        await consumer.run({
            "eachMessage" : async result => {
                console.log(`recieved message ====> ${JSON.stringify(result)}`)
            }
        });

    } catch (error) {
        console.error(`error : ${error}`);
    }
}