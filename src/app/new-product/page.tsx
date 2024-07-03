"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"; import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";


const formSchema = z.object({
    id: z.string().min(2, {
        message: "id must be at least 2 characters.",
    }),
    productName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    productType: z.string().min(2, {
        message: "Please Select Product Type.",
    }),
    productMerk: z.string().min(2, {
        message: "Please Select Product Merk.",
    }),
    price: z.coerce.number().min(0, {
        message: "Price must be a positive number.",
    }),
    discount: z.coerce.number().min(0, {
        message: "Discount must be a non-negative number.",
    }),
    discountedPrice: z.coerce.number().min(0, {
        message: "Discounted price must be a positive number.",
    }),
    inStock: z.boolean().optional().transform(value => !!value),
    image: z.string().refine(value => !!value, {
        message: "You must select an image.",
    }),
    sizes: z.array(z.string()).optional(),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
})

const items = [
    {
        id: "sm",
        label: "SM",
    },
    {
        id: "md",
        label: "MD",
    },
    {
        id: "l",
        label: "L",
    },
    {
        id: "xl",
        label: "XL",
    },
] as const

const NewProduct = () => {
    const { control, register } = useForm();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: "1223344455",
            productName: "",
            productType: "",
            productMerk: "",
            price: 0,
            discount: 0,
            discountedPrice: 0,
            inStock: true,
            image: "",
            sizes: [],
            description: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <main className="px-24 py-2">
            <div className="flex justify-start items-center gap-4">
                <Link href={"/"} className="w-6 h-6 bg-[#F3F3F3] flex justify-center items-center shadow rounded cursor-pointer">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </Link>
                <div>
                    <span className="text-xs opacity-50">Back To List</span>
                    <p>Add New Product</p>
                </div>
            </div>
            <div>
                <h1>General Information</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex justify-between items-center gap-10">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="productName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Product Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Product Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="productType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Product Type</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a Product Type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="sneakers">Sneakers</SelectItem>
                                                        <SelectItem value="boots">Boots</SelectItem>
                                                        <SelectItem value="loafers">Loafers</SelectItem>
                                                        <SelectItem value="heels">Heels</SelectItem>
                                                        <SelectItem value="flats">Flats</SelectItem>
                                                        <SelectItem value="sandals">Sandals</SelectItem>
                                                        <SelectItem value="slippers">Slippers</SelectItem>
                                                        <SelectItem value="running-shoes">Running Shoes</SelectItem>
                                                        <SelectItem value="oxfords">Oxfords</SelectItem>
                                                        <SelectItem value="espadrilles">Espadrilles</SelectItem>
                                                        <SelectItem value="flip-flops">Flip Flops</SelectItem>
                                                        <SelectItem value="moccasins">Moccasins</SelectItem>
                                                        <SelectItem value="wedges">Wedges</SelectItem>
                                                        <SelectItem value="clogs">Clogs</SelectItem>
                                                        <SelectItem value="brogues">Brogues</SelectItem>
                                                    </SelectContent>

                                                </Select>

                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="productMerk"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Product Merk</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a Product Merk" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Athletic Shoes</SelectLabel>
                                                            <SelectItem value="nike">Nike</SelectItem>
                                                            <SelectItem value="adidas">Adidas</SelectItem>
                                                            <SelectItem value="reebok">Reebok</SelectItem>
                                                            <SelectItem value="puma">Puma</SelectItem>
                                                            <SelectItem value="new-balance">New Balance</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Boots</SelectLabel>
                                                            <SelectItem value="timberland">Timberland</SelectItem>
                                                            <SelectItem value="dr-martens">Dr. Martens</SelectItem>
                                                            <SelectItem value="ugg">UGG</SelectItem>
                                                            <SelectItem value="sorel">Sorel</SelectItem>
                                                            <SelectItem value="red-wing">Red Wing</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Dress Shoes</SelectLabel>
                                                            <SelectItem value="aldo">Aldo</SelectItem>
                                                            <SelectItem value="cole-haan">Cole Haan</SelectItem>
                                                            <SelectItem value="johnston-murphy">Johnston & Murphy</SelectItem>
                                                            <SelectItem value="clarks">Clarks</SelectItem>
                                                            <SelectItem value="florsheim">Florsheim</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Sandals</SelectLabel>
                                                            <SelectItem value="birkenstock">Birkenstock</SelectItem>
                                                            <SelectItem value="teva">Teva</SelectItem>
                                                            <SelectItem value="chaco">Chaco</SelectItem>
                                                            <SelectItem value="keen">Keen</SelectItem>
                                                            <SelectItem value="rainbow">Rainbow</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>


                        </div>
                        <div className="flex justify-between items-center gap-10">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Product Price" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="discount"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Discount</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter Discount"

                                                    {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="discountedPrice"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Discounted Price</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Discounted Price" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-10">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="inStock"
                                    render={({ field }) => (
                                        <FormItem className="flex justify-start items-center gap-4">
                                            <FormLabel>In Stock</FormLabel>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem className="flex justify-start items-center gap-4">
                                            <FormLabel>Images</FormLabel>
                                            <FormControl>
                                                <Input id="picture" type="file" multiple accept="image/JPG, image/PNG ,image/JPEG " {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name="sizes"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormLabel className="text-base">Product Sizes</FormLabel>
                                        <FormDescription>
                                            Select the available sizes you want to display.
                                        </FormDescription>
                                    </div>
                                    {items.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="sizes"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value || [], item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.id
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Product Description"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>

            </div>

        </main>
    )
}

export default NewProduct