package com.patrick.PatientAPIMGDB;

import com.patrick.PatientAPIMGDB.model.Gender;
import com.patrick.PatientAPIMGDB.model.Patient;
import com.patrick.PatientAPIMGDB.repository.PatientRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.List;

@SpringBootApplication
public class PatientAPIMGDBApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatientAPIMGDBApplication.class, args);
	}

	// Initializes application with patients
	@Bean
	CommandLineRunner runner(
			PatientRepository repository, MongoTemplate mongoTemplate) {
		return args -> {
			Patient patient = new Patient( "https://randomuser.me/api/portraits/women/71.jpg" ,"Jamila Ahmed",
					"1974, 4, 10",
					"124", "5'6",Gender.FEMALE, "Acute Kidney Failure", "6178 Jacobson Rue, Spring, TX, 78245",
					"jahmed@gmail.com", "993-979-8535", "546-405-7405", "540-629-0698",
					List.of("Heart Failure", "Fracture Ankle"), List.of("Lisinopril", "Furosemide", "Diltiazem", "Lovastatin"), List.of("121/74", "65"), List.of("CMP", "UA", "CBC", "Vital Signs", "Blood Glucose", "Kidney Ultrasound"));

			Patient patient2 = new Patient( "https://randomuser.me/api/portraits/men/62.jpg","John Adams", "1985, 12, 1",
					"284", "6'0", Gender.MALE, "Choledocolithiasis", "6411 Doyle Mission, Houston, TX, 76293",
					"adams.john@yahoo.com", "775-569-8303", "614-504-5926","682-747-0110", List.of("Hepatitis", "High Cholesterol", "Diabetes"),
					List.of("Indomethacin", "Morphine", "Ursodiol", "Tenofovir"), List.of("131/80", "85"), List.of("CT Abdomen & Pelvis", "LFT", "CBC", "CMP", "Vital Signs", "Abdominal Ultrasound"));

			Patient patient3 = new Patient("https://randomuser.me/api/portraits/men/83.jpg", "Chris Smith", "1990, 11, 21",
					"184", "5'7", Gender.MALE, "Myocardial Infarction", "27924 Bergnaum Station, Houston, TX, 76570", "chrissmith12@gmail.com",
					"211-323-6395", "392-500-0229", "373-760-3054", List.of(""),
					List.of("Morphine", "Aspirin", "Furosemide", "Amiodarone"), List.of("150/80", "88"),  List.of("EKG", "CBC", "Troponin", "CKMB", "Vital Signs", "CHEM8" , "Chest X-ray"));

			repository.findPatientByEmail("jahmed@gmail.com")
             .ifPresentOrElse(p -> System.out.println(p + " already exists"), () -> {
                System.out.println("Inserting patient " + patient);
                repository.insert(patient);
             });
			repository.findPatientByEmail("adams.john@yahoo.com")
             .ifPresentOrElse(p -> System.out.println(p + " already exists"), () -> {
                System.out.println("Inserting patient " + patient);
                repository.insert(patient2);
             });
			repository.findPatientByEmail("chrissmith12@gmail.com")
             .ifPresentOrElse(p -> System.out.println(p + " already exists"), () -> {
                System.out.println("Inserting patient " + patient);
                repository.insert(patient3);
             });
		};
	}

}
