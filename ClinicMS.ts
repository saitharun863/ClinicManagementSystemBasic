class Clinic{
    Name : string;
    Location : string;
    constructor() {
        this.Name = "Super Clinic MultiSpeciality Care";
        this.Location = "Kharadi,Pune";
    }
    displayClinic(): void {
        console.log(`Clinic Name: ${this.Name}, Location: ${this.Location}`);
    }
}
class Patient extends Clinic{
    pId : number;
    PName :string;
    pDisease : string;
    constructor(pId: number, PName: string, pDisease: string) {
        super();
        this.pId = pId;
        this.PName = PName;
        this.pDisease = pDisease;
    }
    static DisplayPatient(pat : Patient[]) : void {
        const clinic = new Clinic();
        clinic.displayClinic();
        for (const patient of pat) {
            console.log(`\n Patient ID: ${patient.pId},\n Name: ${patient.PName},\n Disease: ${patient.pDisease}`);
        }
    }
    static Delete(pat: Patient[], index: number): void {
        if (index >= 0 && index < pat.length) {
            pat.splice(index, 1);
        } else {
            console.log("Invalid index");
        }
    }
    static update(patients: Patient[], index: number, updatedPatient: Patient): void {
        if (index >= 0 && index < patients.length) {
            patients[index] = updatedPatient;
            console.log(`Patient at Sl.no ${index+1} has been updated.`);
        } else {
            console.log("Invalid index");
        }
    }
    static AddPatient(patients: Patient[], newPatient: Patient): void {
        patients.push(newPatient);
        console.log(`Patient ${newPatient.PName} has been added.`);
    }
}
class Doctor extends Clinic{
    dId : number;
    dName : string;
    dSpeciality : string;
    constructor(dId: number, dName: string, dSpeciality: string) {
        super();
        this.dId = dId;
        this.dName = dName;
        this.dSpeciality = dSpeciality;
    }
    static displayDoctor(doc : Doctor[]): void {
        const clinic = new Clinic();
        clinic.displayClinic();
        for (const doctor of doc) {
            console.log(`\n Doctor ID: ${doctor.dId},\n Name: ${doctor.dName},\n Speciality: ${doctor.dSpeciality}`);
        }
    }
    static Delete(doc: Doctor[], index: number): void {
        if (index >= 0 && index < doc.length) {
            doc.splice(index, 1);
        } else {
            console.log("Invalid index");
        }
    }
    static update(doctors: Doctor[], index: number, updatedDoctor: Doctor): void {
        if (index >= 0 && index < doctors.length) {
            doctors[index] = updatedDoctor;
            console.log(`Doctor at Sl.no ${index+1} has been updated.`);
        } else {
            console.log("Invalid index");
        }
    }
    static AddDoctor(doctors: Doctor[], newDoctor: Doctor): void {
        doctors.push(newDoctor);
        console.log(`Doctor ${newDoctor.dName} has been added.`);
    }
}
class Medicine extends Clinic{
    mId : number;
    mName : string;
    mUnitPrice : number;
    constructor(mId: number, mName: string, mUnitPrice: number) {
        super();
        this.mId = mId;
        this.mName = mName;
        this.mUnitPrice = mUnitPrice;
    }
    static displayMedicine(med : Medicine[]): void {
        const clinic = new Clinic();
        clinic.displayClinic();
        for (const medicine of med) {
            console.log(`\n Medicine ID: ${medicine.mId},\n Name: ${medicine.mName},\n Unit Price: ${medicine.mUnitPrice}`);
        }
    }
    static Delete(med: Medicine[], index: number): void {
        if (index >= 0 && index < med.length) {
            med.splice(index, 1);
        } else {
            console.log("Invalid index");
        }
    }
    static update(medicines: Medicine[], index: number, updatedMedicine: Medicine): void {
        if (index >= 0 && index < medicines.length) {
            medicines[index] = updatedMedicine;
            console.log(`Medicine at Sl.no ${index+1} has been updated.`);
        } else {
            console.log("Invalid index");
        }
    }
    static AddMedicine(medicines: Medicine[], newMedicine: Medicine): void {
        medicines.push(newMedicine);
        console.log(`Medicine ${newMedicine.mName} has been added.`);
    }
}
class Nurse extends Clinic{
    nId : number;
    nName : string;
    nDept : string;
    constructor(nId: number, nName: string, nDept: string) {
        super();
        this.nId = nId;
        this.nName = nName;
        this.nDept = nDept;
    }
    static displayNurse(nurses: Nurse[]): void {
        const clinic = new Clinic();
        clinic.displayClinic();
        for (const nurse of nurses) {
            console.log(`\n Nurse ID: ${nurse.nId},\n Name: ${nurse.nName},\n Department: ${nurse.nDept}`);
        }
    }
    static Delete(nurses: Nurse[], index: number): void {
        if (index >= 0 && index < nurses.length) {
            nurses.splice(index, 1);
        } else {
            console.log("Invalid index");
        }
    }
    static update(nurses: Nurse[], index: number, updatedNurse: Nurse): void {
        if (index >= 0 && index < nurses.length) {
            nurses[index] = updatedNurse;
            console.log(`Nurse at Sl.no ${index+1} has been updated.`);
        } else {
            console.log("Invalid index");
        }
    }
    static AddNurse(nurses: Nurse[], newNurse: Nurse): void {
        nurses.push(newNurse);
        console.log(`Nurse ${newNurse.nName} has been added.`);
    }
}
class Appointment extends Clinic{
    aId : number;
    apid : number;
    adId : number;
    amId : number;
    aTime : Date;
    constructor(aId: number, apid: number, adId: number, amId: number, aTime: Date) {
        super();
        this.aId = aId;
        this.apid = apid;
        this.adId = adId;
        this.amId = amId;
        this.aTime = aTime;
    }
    static displayAppointments(appointment: Appointment[]): void {
        const clinic = new Clinic();
        clinic.displayClinic();
        for (const app of appointment) {
            console.log(`\n Appointment ID: ${app.aId},\n Patient ID: ${app.apid},\n Doctor ID: ${app.adId},\n Medicine ID: ${app.amId},\n Appointment Time: ${app.aTime}`);
        }
    }
    static Delete(appointments: Appointment[], index: number): void {
        if (index >= 0 && index < appointments.length) {
            appointments.splice(index, 1);
        } else {
            console.log("Invalid index");
        }
    }
    static update(appointments: Appointment[], index: number, updatedAppointment: Appointment): void {
        if (index >= 0 && index < appointments.length) {
            appointments[index] = updatedAppointment;
            console.log(`Appointment at Sl.no ${index+1} has been updated.`);
        } else {
            console.log("Invalid index");
        }
    }
    static AddAppointment(appointments: Appointment[], newAppointment: Appointment): void {
        appointments.push(newAppointment);
        console.log(`Appointment with ID ${newAppointment.aId} has been added.`);
    }
}

var patient = [
    new Patient(1, "John Doe", "Flu"),
    new Patient(2, "Jane Doe", "Cold"),
    new Patient(3, "Alice Smith", "Fever"),
    new Patient(4, "Bob Brown", "Cough"),
    new Patient(5, "Charlie Wilson", "Headache")
];

var doctor = [
    new Doctor(1, "Dr. Smith", "Cardiology"),
    new Doctor(2, "Dr. Johnson", "Neurology"),
    new Doctor(3, "Dr. Brown", "Orthopedics"),
    new Doctor(4, "Dr. Taylor", "Pediatrics"),
    new Doctor(5, "Dr. Wilson", "Dermatology")
];

var medicine = [
    new Medicine(1, "Paracetamol", 10),
    new Medicine(2, "Ibuprofen", 15),
    new Medicine(3, "Amoxicillin", 20),
    new Medicine(4, "Cough Syrup", 25),
    new Medicine(5, "Antacid", 5)
];

var nurse = [
    new Nurse(1, "Nurse Joy", "Emergency"),
    new Nurse(2, "Nurse Mary", "Pediatrics"),
    new Nurse(3, "Nurse Anne", "Cardiology"),
    new Nurse(4, "Nurse Kate", "Neurology"),
    new Nurse(5, "Nurse Emma", "Orthopedics")
];

var appointment = [
    new Appointment(1, 1, 1, 1, new Date("2023-10-01T10:00:00")),
    new Appointment(2, 2, 2, 2, new Date("2023-10-02T11:00:00")),
    new Appointment(3, 3, 3, 3, new Date("2023-10-03T12:00:00")),
    new Appointment(4, 4, 4, 4, new Date("2023-10-04T13:00:00")),
    new Appointment(5, 5, 5, 5, new Date("2023-10-05T14:00:00"))
];

//for updation and adding
var patient1 = new Patient(6, "Bhusan Darry", "Flu");
var patient2 = new Patient(7, "Hardhik Pannu", "Jaundice");

var doctor1 = new Doctor(3, "Dr. Hari Prasad", "Cardiology");

var medicine1 = new Medicine(1, "RomeSpactica", 10);

var nurse1 = new Nurse(1, "Nurse Rajne", "Emergency");

var appointment1 = new Appointment(5, 1, 2, 3, new Date("2023-09-30T10:00:00"));

console.log("patient details");
Patient.DisplayPatient(patient);
console.log("Adding Patient");
Patient.AddPatient(patient,patient1);
Patient.DisplayPatient(patient);
console.log();
console.log("Update patient");
Patient.update(patient, 0, patient2);
Patient.DisplayPatient(patient);
console.log();
console.log("delete patient");
Patient.Delete(patient,4);
Patient.DisplayPatient(patient);
