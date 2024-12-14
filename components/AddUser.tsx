"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

// Schema validation with Zod
const formSchema = z.object({
  fullName: z.string().min(2, "Full Name should be at least 2 words"),
  email: z.string().email("Invalid email format"),
  sex: z.string().min(1, "Sex is required"),
  accountTypes: z
    .array(z.enum(["Admin", "Student", "Academic", "Non Academic"]))
    .nonempty("Select at least one account type"),
  profilePicture: z.instanceof(File).optional(),
  homeAddress: z
    .string()
    .min(5, "Home Address should be at least 5 characters"),
  class: z.enum(["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"]),
  guardiansFullName: z
    .string()
    .min(2, "Guardian's Full Name should be at least 2 words"),
  guardiansPhoneNumber: z
    .string()
    .min(11, "Guardian's Phone Number should be at least 11 digits"),
  guardiansAddress: z
    .string()
    .min(5, "Guardian's Address should be at least 5 characters"),
  guardiansRelationship: z.enum(["Father", "Mother", "Guardian"]),
  dateOfBirth: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format"),
  position: z.string().min(2, "Position should be at least 2 characters"),
  qualification: z
    .string()
    .min(2, "Qualification should be at least 2 characters"),
  salary: z.number().min(0, "Salary should be a positive number"),
  appointmentDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format"),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddAccountForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const accountTypes = ["Admin", "Academic", "Non Academic", "Student"];

  // React Hook Form with Zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      sex: "",
      accountTypes: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-full p-3">
      <div className="relative">
        <h2 className="text-xl font-semibold text-center">Add Account</h2>
        <div className="absolute top-[-12px] right-0">{children}</div>
      </div>
      {/* Form Wrapper */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Profile Picture Upload */}
          <div className="border border-dashed p-4 rounded-lg text-center">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="profile-upload"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setProfileImage(e.target.files[0]);
                  form.setValue("profilePicture", e.target.files[0]);
                }
              }}
            />
            <label htmlFor="profile-upload" className="cursor-pointer">
              {profileImage ? (
                <Image
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto rounded-full"
                />
              ) : (
                <span className="text-sm text-gray-500">
                  Click <b>here</b> to add profile picture
                </span>
              )}
            </label>
          </div>

          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email account" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sex */}
          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sex</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sex" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Account Type Checkboxes */}
          <FormField
            control={form.control}
            name="accountTypes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    className="space-y-2"
                  >
                    {accountTypes.map((type) => (
                      <FormItem
                        key={type}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={type} />
                        </FormControl>
                        <FormLabel className="font-normal">{type}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch("accountTypes").includes("Student") && (
            <>
              <FormField
                control={form.control}
                name="homeAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter home address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="class"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="JSS1">JSS1</SelectItem>
                        <SelectItem value="JSS2">JSS2</SelectItem>
                        <SelectItem value="JSS3">JSS3</SelectItem>
                        <SelectItem value="SS1">SS1</SelectItem>
                        <SelectItem value="SS2">SS2</SelectItem>
                        <SelectItem value="SS3">SS3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guardiansFullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian&apos;s Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter guardian's full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guardiansPhoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian&apos;s Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter guardian's phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guardiansAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian&apos;s Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter guardian's address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guardiansRelationship"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian&apos;s Relationship</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Father">Father</SelectItem>
                        <SelectItem value="Mother">Mother</SelectItem>
                        <SelectItem value="Guardian">Guardian</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"ghost"}
                              className={cn(
                                "w-[240px] pl-3 text-left ml-4 font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {["Admin", "Academic", "Non Academic"].includes(
            // @ts-expect-error
            form.watch("accountTypes"),
          ) && (
            <>
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                    <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"ghost"}
                              className={cn(
                                "w-[240px] pl-3 text-left ml-4 font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter position" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualification</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter qualification" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter salary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="appointmentDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appointment Date</FormLabel>
                    <FormControl>
                    <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"ghost"}
                              className={cn(
                                "w-[240px] pl-3 text-left ml-4 font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* Submit Button */}
          <Button type="submit" className="mx-auto">
            Add Account
          </Button>
        </form>
      </Form>
    </div>
  );
}
