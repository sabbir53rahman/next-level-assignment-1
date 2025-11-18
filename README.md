# next-level-assignment-1

What are some differences between interfaces and types in TypeScript?

Typescript এর মধ্যে type alias এবং interface  প্রায় একই রকম কাজ করলেও এর মধ্যে কিছু পার্থক্য রয়েছে
যেমন :
১. Interface মূলত object গঠনে সাহায্য করে কিন্তু type alias primitive data থেকে শুরু করে প্রায় সবকিছুই ডিফাইন করা যায় 
2. interface এ এক নামে বারবার data ডিফাইন করা যায় এবং তা একটা data type হিসেবে কাজ করে কিন্তু type alias এ এক নামে বার বার data define করা যায় না
3. Interface এ primitive data define করা যায় না কিন্তু type alias এ primitive data define করা যায়


Explain the difference between any, unknown, and never types in TypeScript.

* any type বলতে বুঝানো হয় এখানে যেকোনো টাইপের value আসতে পারে এবং any type ব্যবহার করলে এটি একটি variable এর মত  হয়ে যায় 
* আর অন্যদিকে unkhown মূলত ব্যবহার হয় যখন আমি data type সম্পর্কে অবগত না কিন্তু রান টাইমে যেয়ে বুঝতে পারবো এটা কি type এর data আসবে 
* আর never type বলতে বোঝানো হয় যেটা কখনোই কোন কিছুই রিটার্ন করবে না বা কোন কিছুই দিবে না কোন value দিবে না