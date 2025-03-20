var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clinic = /** @class */ (function () {
    function Clinic() {
        this.Name = "Super Clinic MultiSpeciality Care";
        this.Location = "Kharadi,Pune";
    }
    Clinic.prototype.displayClinic = function () {
        console.log("Clinic Name: ".concat(this.Name, ", Location: ").concat(this.Location));
    };
    return Clinic;
}());
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(pId, PName, pDisease) {
        var _this = _super.call(this) || this;
        _this.pId = pId;
        _this.PName = PName;
        _this.pDisease = pDisease;
        return _this;
    }
    Patient.DisplayPatient = function (pat) {
        var clinic = new Clinic();
        clinic.displayClinic();
        for (var _i = 0, pat_1 = pat; _i < pat_1.length; _i++) {
            var patient_1 = pat_1[_i];
            console.log("\n Patient ID: ".concat(patient_1.pId, ",\n Name: ").concat(patient_1.PName, ",\n Disease: ").concat(patient_1.pDisease));
        }
    };
    Patient.Delete = function (pat, index) {
        if (index >= 0 && index < pat.length) {
            pat.splice(index, 1);
        }
        else {
            console.log("Invalid index");
        }
    };
    Patient.update = function (patients, index, updatedPatient) {
        if (index >= 0 && index < patients.length) {
            patients[index] = updatedPatient;
            console.log("Patient at index ".concat(index, " has been updated."));
        }
        else {
            console.log("Invalid index");
        }
    };
    Patient.AddPatient = function (patients, newPatient) {
        patients.push(newPatient);
        console.log("Patient ".concat(newPatient.PName, " has been added."));
    };
    return Patient;
}(Clinic));
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(dId, dName, dSpeciality) {
        var _this = _super.call(this) || this;
        _this.dId = dId;
        _this.dName = dName;
        _this.dSpeciality = dSpeciality;
        return _this;
    }
    Doctor.displayDoctor = function (doc) {
        var clinic = new Clinic();
        clinic.displayClinic();
        for (var _i = 0, doc_1 = doc; _i < doc_1.length; _i++) {
            var doctor_1 = doc_1[_i];
            console.log("\n Doctor ID: ".concat(doctor_1.dId, ",\n Name: ").concat(doctor_1.dName, ",\n Speciality: ").concat(doctor_1.dSpeciality));
        }
    };
    Doctor.Delete = function (doc, index) {
        if (index >= 0 && index < doc.length) {
            doc.splice(index, 1);
        }
        else {
            console.log("Invalid index");
        }
    };
    Doctor.update = function (doctors, index, updatedDoctor) {
        if (index >= 0 && index < doctors.length) {
            doctors[index] = updatedDoctor;
            console.log("Doctor at index ".concat(index, " has been updated."));
        }
        else {
            console.log("Invalid index");
        }
    };
    Doctor.AddDoctor = function (doctors, newDoctor) {
        doctors.push(newDoctor);
        console.log("Doctor ".concat(newDoctor.dName, " has been added."));
    };
    return Doctor;
}(Clinic));
var Medicine = /** @class */ (function (_super) {
    __extends(Medicine, _super);
    function Medicine(mId, mName, mUnitPrice) {
        var _this = _super.call(this) || this;
        _this.mId = mId;
        _this.mName = mName;
        _this.mUnitPrice = mUnitPrice;
        return _this;
    }
    Medicine.displayMedicine = function (med) {
        var clinic = new Clinic();
        clinic.displayClinic();
        for (var _i = 0, med_1 = med; _i < med_1.length; _i++) {
            var medicine_1 = med_1[_i];
            console.log("\n Medicine ID: ".concat(medicine_1.mId, ",\n Name: ").concat(medicine_1.mName, ",\n Unit Price: ").concat(medicine_1.mUnitPrice));
        }
    };
    Medicine.Delete = function (med, index) {
        if (index >= 0 && index < med.length) {
            med.splice(index, 1);
        }
        else {
            console.log("Invalid index");
        }
    };
    Medicine.update = function (medicines, index, updatedMedicine) {
        if (index >= 0 && index < medicines.length) {
            medicines[index] = updatedMedicine;
            console.log("Medicine at index ".concat(index, " has been updated."));
        }
        else {
            console.log("Invalid index");
        }
    };
    Medicine.AddMedicine = function (medicines, newMedicine) {
        medicines.push(newMedicine);
        console.log("Medicine ".concat(newMedicine.mName, " has been added."));
    };
    return Medicine;
}(Clinic));
var Nurse = /** @class */ (function (_super) {
    __extends(Nurse, _super);
    function Nurse(nId, nName, nDept) {
        var _this = _super.call(this) || this;
        _this.nId = nId;
        _this.nName = nName;
        _this.nDept = nDept;
        return _this;
    }
    Nurse.displayNurse = function (nurses) {
        var clinic = new Clinic();
        clinic.displayClinic();
        for (var _i = 0, nurses_1 = nurses; _i < nurses_1.length; _i++) {
            var nurse_1 = nurses_1[_i];
            console.log("\n Nurse ID: ".concat(nurse_1.nId, ",\n Name: ").concat(nurse_1.nName, ",\n Department: ").concat(nurse_1.nDept));
        }
    };
    Nurse.Delete = function (nurses, index) {
        if (index >= 0 && index < nurses.length) {
            nurses.splice(index, 1);
        }
        else {
            console.log("Invalid index");
        }
    };
    Nurse.update = function (nurses, index, updatedNurse) {
        if (index >= 0 && index < nurses.length) {
            nurses[index] = updatedNurse;
            console.log("Nurse at index ".concat(index, " has been updated."));
        }
        else {
            console.log("Invalid index");
        }
    };
    Nurse.AddNurse = function (nurses, newNurse) {
        nurses.push(newNurse);
        console.log("Nurse ".concat(newNurse.nName, " has been added."));
    };
    return Nurse;
}(Clinic));
var Appointment = /** @class */ (function (_super) {
    __extends(Appointment, _super);
    function Appointment(aId, apid, adId, amId, aTime) {
        var _this = _super.call(this) || this;
        _this.aId = aId;
        _this.apid = apid;
        _this.adId = adId;
        _this.amId = amId;
        _this.aTime = aTime;
        return _this;
    }
    Appointment.displayAppointments = function (appointment) {
        var clinic = new Clinic();
        clinic.displayClinic();
        for (var _i = 0, appointment_1 = appointment; _i < appointment_1.length; _i++) {
            var app = appointment_1[_i];
            console.log("\n Appointment ID: ".concat(app.aId, ",\n Patient ID: ").concat(app.apid, ",\n Doctor ID: ").concat(app.adId, ",\n Medicine ID: ").concat(app.amId, ",\n Appointment Time: ").concat(app.aTime));
        }
    };
    Appointment.Delete = function (appointments, index) {
        if (index >= 0 && index < appointments.length) {
            appointments.splice(index, 1);
        }
        else {
            console.log("Invalid index");
        }
    };
    Appointment.update = function (appointments, index, updatedAppointment) {
        if (index >= 0 && index < appointments.length) {
            appointments[index] = updatedAppointment;
            console.log("Appointment at index ".concat(index, " has been updated."));
        }
        else {
            console.log("Invalid index");
        }
    };
    Appointment.AddAppointment = function (appointments, newAppointment) {
        appointments.push(newAppointment);
        console.log("Appointment with ID ".concat(newAppointment.aId, " has been added."));
    };
    return Appointment;
}(Clinic));
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
Patient.AddPatient(patient, patient1);
Patient.DisplayPatient(patient);
console.log();
console.log("Update patient");
Patient.update(patient, 0, patient2);
Patient.DisplayPatient(patient);
console.log();
console.log("delete patient");
Patient.Delete(patient, 4);
Patient.DisplayPatient(patient);
