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
            'fromBeginning' : true, // read from beginning position in the topic
            'topic' : 'users'       // subscribe to this topic in kafka broker.
        });

        /*
            Performing operations on the messege got from the topic.
            Here, I am printing the messege.
            This task will be scanning for new messages from the topic
        */
        await consumer.run({
            "eachMessage" : async result => {
                console.log(`recieved message ====> ${result.message.value} on partition ===>${result.partition}`);
            }
        });

    } catch (error) {
        console.error(`error : ${error}`);
    }
}