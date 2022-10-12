package com.patrick.PatientAPIMGDB.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Document
@CompoundIndexes({
    @CompoundIndex(name = "name_dob", def = "{'name' : 1, 'DOB': 1}", unique = true)
})
public class Patient {
    @Id
    private String id;

    @NotNull
    private String profileImg;

    @NotNull
    private String name;


    @NotNull
    private String DOB;

    @NotNull
    private String weight;
    
    private Gender gender;

    @NotNull
    private String diagnosis;

    @NotNull
    private String address;

    @NotNull
    private String mobileNumber;

    @NotNull
    private String homeNumber;

    @NotNull
    private String workNumber;

    @NotNull
    private String height;

    private LocalDateTime createdAt;
    @NotNull
    private String email;
    @NotNull
    private List<String> comorbidities;

    @NotNull
    private List<String> medications;

    @NotNull
    private String[] vitalSigns;

    @NotNull List<String> labOrders;

    public Patient() {
    }

    public Patient(String profileImg, String name, String DOB, String weight, String height,
                   Gender gender, String diagnosis, String address, String email,
                   String homeNumber, String mobileNumber, String workNumber,
                   List<String> comorbidities, List<String> medications, String[] vitalSigns, List<String> labOrders) {
        this.profileImg = profileImg;
        this.name = name;
        this.DOB = DOB;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
        this.diagnosis = diagnosis;
        this.address = address;
        this.email = email;
        this.homeNumber = homeNumber;
        this.mobileNumber = mobileNumber;
        this.workNumber = workNumber;
        this.comorbidities = comorbidities;
        this.createdAt = LocalDateTime.now();
        this.medications = medications;
        this.vitalSigns = vitalSigns;
        this.labOrders = labOrders;
    }

    public String getId(){
        return id;
    }

    public String getWeight(){
        return weight;
    }
}
