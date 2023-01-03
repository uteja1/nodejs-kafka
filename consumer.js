const {Kafka} = require('kafkajs');


run ();

async function run() {
    
    try {
        
        const kafka = new Kafka({
            'clientId' : 'app',
            'brokers' : ['localhost:29092']
        });

        const consumer = kafka.consumer({
            'groupId' : 'test'
        });
        await consumer.connect();
        console.log('connected');
       
        consumer.subscribe({
            'fromBeginning' : true,
            'topic' : 'users'
        });

        await consumer.run({
            "eachMessage" : async result => {
                console.log(`recieved message ====> ${JSON.stringify(result)}`)
            }
        });

    } catch (error) {
        console.error(`error : ${error}`);
    }
}