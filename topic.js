const {Kafka} = require('kafkajs');

run ();

async function run() {
    
    try {
        
        const kafka = new Kafka({
            'clientId' : 'app',
            'brokers' : ['localhost:29092']
        });

        const admin = kafka.admin();
        await admin.connect();
        console.log('connected');
        await admin.createTopics({
            'topics' : [{
                // creating topic users to publish user 
                'topic' : 'users',
                'numPartitions' : 2
            }]
        });

        console.log('topic created successfully');

        await admin.disconnect();
    } catch (error) {
        console.error(`error : ${error}`);
    } finally {
        process.exit(0);
    }
}